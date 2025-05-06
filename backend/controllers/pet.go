package controllers

import (
	"github.com/gin-gonic/gin"
	"pet-backend/db"
	"pet-backend/models"
	"net/http"
)

func CreatePet(c *gin.Context) {
	var pet models.Pet
	if err := c.ShouldBindJSON(&pet); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	query := `INSERT INTO pets (name, type, breed, age, gender, size, location, description, main_photo, contact_name, contact_phone, contact_email) 
	VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`
	_, err := db.DB.Exec(query, pet.Name, pet.Type, pet.Breed, pet.Age, pet.Gender, pet.Size, pet.Location, pet.Description, pet.MainPhoto, pet.ContactName, pet.ContactPhone, pet.ContactEmail)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, pet)
}

func GetAllPets(c *gin.Context) {
	rows, err := db.DB.Query("SELECT * FROM pets")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()
	var pets []models.Pet
	for rows.Next() {
		var p models.Pet
		rows.Scan(&p.ID, &p.Name, &p.Type, &p.Breed, &p.Age, &p.Gender, &p.Size, &p.Location, &p.Description, &p.MainPhoto, &p.ContactName, &p.ContactPhone, &p.ContactEmail)
		pets = append(pets, p)
	}
	c.JSON(http.StatusOK, pets)
}

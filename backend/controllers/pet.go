package controllers

import (
	"net/http"
	"pet-backend/db"
	"pet-backend/models"

	"github.com/gin-gonic/gin"
)

func CreatePet(c *gin.Context) {
	var pet models.Pet
	if err := c.ShouldBindJSON(&pet); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	query := `INSERT INTO pets 
	(name, type, breed, age, gender, size, location, description, main_photo, contact_name, contact_phone, contact_email) 
	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

	result, err := db.DB.Exec(query,
		pet.Name, pet.Type, pet.Breed, pet.Age, pet.Gender, pet.Size,
		pet.Location, pet.Description, pet.MainPhoto,
		pet.ContactName, pet.ContactPhone, pet.ContactEmail)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	id, _ := result.LastInsertId()
	pet.ID = int(id)

	c.JSON(http.StatusCreated, pet)
}

func GetAllPets(c *gin.Context) {
	rows, err := db.DB.Query(`SELECT id, name, type, breed, age, gender, size, location, description, main_photo, contact_name, contact_phone, contact_email FROM pets`)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var pets []models.Pet
	for rows.Next() {
		var pet models.Pet
		err := rows.Scan(
			&pet.ID, &pet.Name, &pet.Type, &pet.Breed, &pet.Age, &pet.Gender, &pet.Size,
			&pet.Location, &pet.Description, &pet.MainPhoto,
			&pet.ContactName, &pet.ContactPhone, &pet.ContactEmail)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		pets = append(pets, pet)
	}

	c.JSON(http.StatusOK, pets)
}

func GetPetByID(c *gin.Context) {
	id := c.Param("id")

	var pet models.Pet
	query := `SELECT id, name, type, breed, age, gender, size, location, description, main_photo, contact_name, contact_phone, contact_email 
	FROM pets WHERE id = ?`

	err := db.DB.QueryRow(query, id).Scan(
		&pet.ID, &pet.Name, &pet.Type, &pet.Breed, &pet.Age, &pet.Gender, &pet.Size,
		&pet.Location, &pet.Description, &pet.MainPhoto,
		&pet.ContactName, &pet.ContactPhone, &pet.ContactEmail)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pet not found"})
		return
	}

	c.JSON(http.StatusOK, pet)
}

func UpdatePet(c *gin.Context) {
	id := c.Param("id")

	var pet models.Pet
	if err := c.ShouldBindJSON(&pet); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	query := `UPDATE pets SET 
	name = ?, type = ?, breed = ?, age = ?, gender = ?, size = ?, location = ?, 
	description = ?, main_photo = ?, contact_name = ?, contact_phone = ?, contact_email = ? 
	WHERE id = ?`

	_, err := db.DB.Exec(query,
		pet.Name, pet.Type, pet.Breed, pet.Age, pet.Gender, pet.Size,
		pet.Location, pet.Description, pet.MainPhoto,
		pet.ContactName, pet.ContactPhone, pet.ContactEmail, id)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Pet updated successfully"})
}

func DeletePet(c *gin.Context) {
	id := c.Param("id")

	result, err := db.DB.Exec("DELETE FROM pets WHERE id = ?", id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	rowsAffected, _ := result.RowsAffected()
	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pet not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Pet deleted successfully"})
}

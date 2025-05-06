package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"pet-backend/db"
	"pet-backend/models"
	"pet-backend/utils"
)

func SubscribeEmail(c *gin.Context) {
	var sub models.SubscribeEmail
	if err := c.ShouldBindJSON(&sub); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	_, err := db.DB.Exec("INSERT INTO emails (email) VALUES ($1)", sub.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	utils.SendThankYouEmail(sub.Email)
	c.JSON(http.StatusOK, gin.H{"message": "Thank you for subscribing!"})
}

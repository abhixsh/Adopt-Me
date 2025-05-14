package routes

import (
	"github.com/gin-gonic/gin"
	"pet-backend/controllers"
)

func SetupRoutes(router *gin.Engine) {
	router.POST("/pets", controllers.CreatePet)
	router.GET("/pets", controllers.GetAllPets)
}

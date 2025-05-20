package routes

import (
	"pet-backend/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	// Remove any CORS configuration from here
	// The CORS middleware is now in main.go

	api := router.Group("/api")
	{
		api.GET("/pets", controllers.GetAllPets)
		api.POST("/pets", controllers.CreatePet)
		api.GET("/pets/:id", controllers.GetPetByID)
		api.PUT("/pets/:id", controllers.UpdatePet)
		api.DELETE("/pets/:id", controllers.DeletePet)
	}
}

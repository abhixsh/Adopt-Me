package routes

import (
	"pet-backend/controllers"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true, 
		MaxAge:           12 * time.Hour,
	}))


	api := router.Group("/api")
	{
		api.GET("/pets", controllers.GetAllPets)
		api.POST("/pets", controllers.CreatePet)
		api.GET("/pets/:id", controllers.GetPetByID)
		api.PUT("/pets/:id", controllers.UpdatePet)
		api.DELETE("/pets/:id", controllers.DeletePet)
	}
}

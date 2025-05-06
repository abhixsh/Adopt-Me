package main

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"log"
	"pet-backend/db"
	"pet-backend/routes"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db.Connect()

	router := gin.Default()
	routes.SetupRoutes(router)
	router.Run(":8080")
}

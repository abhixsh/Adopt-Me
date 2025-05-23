package main

import (
	"log"
	"net/http"
	"pet-backend/db"
	"pet-backend/routes"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

// Simple CORS middleware
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Always set this to the frontend origin
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		// Handle preflight requests
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db.Connect()

	router := gin.Default()
	
	// Apply our custom CORS middleware first, before any other middleware
	router.Use(CORSMiddleware())
	
	// Setup routes (make sure routes.go doesn't have additional CORS middleware)
	routes.SetupRoutes(router)
	
	log.Println("Server starting on http://localhost:8081")
	router.Run(":8081")
}
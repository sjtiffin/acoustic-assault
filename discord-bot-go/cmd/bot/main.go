package main

import (
	"log"
	"os"

	"github.com/bwmarrin/discordgo"
)

const tokenEnv = "BOT_TOKEN_ENV"

func main() {
	token, ok := os.LookupEnv(tokenEnv)

	if !ok {
		log.Fatal("Token not found")
	}
	dg, err := discordgo.New("Bot" + token)
	if err != nil {
		log.Fatalf("Error creating discord session: ", err)
	}
}

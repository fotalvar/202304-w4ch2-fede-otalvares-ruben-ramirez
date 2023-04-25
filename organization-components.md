# Project organization

## Data

- A collection of Star Wars characters
- Each character: Object with interface CharacterStructure

  - id
  - name
  - picture
  - heigth
  - mass
  - created

## Data modifications

- Load list of Star Wars characters
- Remove character from collection

## Components

- App

  - State: The collection of characters cards
  - Modifications
    - Remove character card

- Character

  - Receives a prop with character
  - Receives an prop with the action remove

- Button
  - Receives a prop with the text "Remove"
  - Receives a prop with the action on Click

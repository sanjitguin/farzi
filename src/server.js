import { createServer, Model } from "miragejs"


createServer({
    models: {
        products: Model,
    },

    seeds(server) {
        server.create("product", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: [`prod-1-1`,"prod-1-2","prod-1-3"], type: "simple" , avatarUrl:"https://cdn-icons-png.flaticon.com/128/763/763769.png", shortDesc:"#fake #alter"})
        server.create("product", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: ["prod-2-1","prod-2-2","prod-2-3"], type: "rugged", avatarUrl: "https://cdn-icons-png.flaticon.com/128/141/141819.png",  shortDesc:"#dummy #phoney"})
        server.create("product", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: ["prod-3-1","prod-3-2","prod-3-3"], type: "luxury", avatarUrl: "https://cdn-icons-png.flaticon.com/128/763/763789.png",  shortDesc:"#forge #falsify" })
        server.create("product", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: ["prod-4-1","prod-4-2","prod-4-3"], type: "simple", avatarUrl:"https://cdn-icons-png.flaticon.com/128/2395/2395796.png",  shortDesc:"#pirate #lookalike" })
        server.create("product", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: ["prod-5-1","prod-5-2","prod-5-3"], type: "luxury", avatarUrl:"https://cdn-icons-png.flaticon.com/128/2253/2253512.png", shortDesc:"#fraud #counterfeit" })
        server.create("product", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: ["prod-6-1","prod-6-2","prod-6-3"], type: "rugged", avatarUrl: "https://cdn-icons-png.flaticon.com/128/1960/1960007.png", shortDesc:"#con-artist #hoax" })
    },

    routes() {
        this.namespace = "api"

        this.get("/product", (schema, request) => {
            return schema.products.all()
        })
        
        this.get("/product/:id", (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })
    }
})
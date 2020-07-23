module.exports = {
    board: [
        {
            //GO
            name: "C'est parti!",
            position: 0,
            type: "go",
            url: "images/fromages/go.jpg"
        },
        {
            //Mediterranean Avenue
            name: "Camembert",
            cost: 60,
            upgrade: 50,
            position: 1,
            group: "purple",
            rent: [
                2, 10, 30, 90, 160, 250,
            ],
            type: "property",
            url: "images/fromages/camembert.jpg",
            color: "#5E3C9F",
        },
        {
            //Community Chest
            name: "Caisse de Communauté",
            position: 2,
            type: "chance",
            url: "images/fromages/commu.jpg"
        },
        {
            //Baltic Ave
            name: "Brie",
            cost: 60,
            upgrade: 50,
            position: 3,
            group: "purple",
            rent: [
                4, 20, 60, 180, 320, 450,
            ],
            type: "property",
            url: "images/fromages/brie.jpg",
            color: "#5E3C9F",
        },
        {
            //Income Tax
            name: "Taxe",
            position: 4,
            type: "income-tax",
            url: "https://i.imgur.com/1E3cLRO.png"
        },
        {
            //Reading Railroad
            name: "Beaufort",
            cost: 200,
            base_rent: 25,
            position: 5,
            type: "rr",
            url: "images/fromages/beaufort.jpg",
            color: "#8B4513",
        },
        {
            //Connecticut Avenue
            name: "Chèvre",
            cost: 120,
            upgrade: 50,
            position: 9,
            group: "light-blue",
            rent: [
                6, 30, 90, 270, 400, 550,
            ],
            type: "property",
            url: "images/fromages/chevre.jpg",
            color: "#9eeafb"
        },
        {
            //Chance
            name: "Chance",
            position: 7,
            type: "chance",
            url: "images/fromages/chance.jpg"
        },
        {
            //Vermont Avenue
            name: "Crottin",
            cost: 100,
            upgrade: 50,
            position: 8,
            group: "light-blue",
            rent: [
                6, 30, 90, 270, 400, 550,
            ],
            type: "property",
            url: "images/fromages/crottin.jpg",
            color: "#9eeafb"
        },
        {
            //Oriental Ave
            name: "Mimolette",
            cost: 100,
            upgrade: 50,
            position: 6,
            group: "light-blue",
            rent: [
                8, 40, 100, 300, 450, 600,
            ],
            type: "property",
            url: "images/fromages/mimolette.jpg",
            color: "#9eeafb"
        },
        {
            name: "Prison",
            position: 10,
            type: "jail",
            url: "https://i.imgur.com/UjkDuYN.jpg"
        },
        {
            //St Charles Place
            name: "Emmental",
            cost: 140,
            upgrade: 100,
            position: 11,
            group: "pink",
            rent: [
                10, 50, 150, 450, 625, 750,
            ],
            type: "property",
            url: "images/fromages/emmental.jpg",
            color: "#D13F9B",
        },
        {
            //Electric Company
            name: "Charcuterie",
            cost: 150,
            position: 12,
            group: "utility",
            type: "utility",
            url: "images/fromages/charcuterie.jpg",
            color: "#FBB677"
        },
        {
            //States Avenue
            name: "Gouda",
            cost: 140,
            upgrade: 100,
            position: 13,
            group: "pink",
            rent: [
                10, 50, 150, 450, 625, 750,
            ],
            type: "property",
            url: "images/fromages/gouda.jpg",
            color: "#D13F9B",
        },
        {
            //Virginia Avenue
            name: "Parmesan",
            cost: 160,
            upgrade: 100,
            position: 14,
            group: "pink",
            rent: [
                12, 60, 180, 500, 700, 900,
            ],
            type: "property",
            url: "images/fromages/parmesan.jpg",
            color: "#D13F9B",
        },
        {
            //Pennsylvania Railroad
            name: "Chaussé aux moines",
            cost: 200,
            base_rent: 25,
            position: 15,
            type: "rr",
            url: "images/fromages/chausse.jpg",
            color: "#8B4513",
        },
        {
            //Tennessee Avenue
            name: "Morbier",
            cost: 180,
            upgrade: 100,
            position: 18,
            group: "orange",
            rent: [
                14, 70, 200, 550, 750, 950,
            ],
            type: "property",
            url: "images/fromages/morbier.jpg",
            color: "#FFA500",
        },
        {
            //Community Chest
            name: "Caisse de Communauté",
            position: 17,
            type: "chest",
            url: "images/fromages/commu.jpg"
        },
        {
            //St James Place
            name: "Cantal",
            cost: 180,
            upgrade: 100,
            position: 16,
            group: "orange",
            rent: [
                14, 70, 200, 550, 750, 950,
            ],
            type: "property",
            url: "images/fromages/cantal.jpg",
            color: "#FFA500",
        },
        {
            //New York Avenue
            name: "Saint-Nectaire",
            cost: 200,
            upgrade: 100,
            position: 19,
            group: "orange",
            rent: [
                16, 80, 220, 600, 800, 1000,
            ],
            type: "property",
            url: "images/fromages/stnectaire.jpg",
            color: "#FFA500",
        },
        {
            //Free Parking
            name: "Parking",
            position: 20,
            type: "parking",
            url: "images/fromages/parking.png"
        },
        {
            //Kentucky Avenue
            name: "Bleu",
            cost: 220,
            upgrade: 150,
            position: 21,
            group: "red",
            rent: [
                18, 90, 250, 700, 875, 1050,
            ],
            type: "property",
            url: "images/fromages/bleu.jpg",
            color: "#ff3f3f"
        },
        {
            //Chance
            name: "Chance",
            position: 22,
            type: "chance",
            url: "images/fromages/chance.jpg"
        },
        {
            //Indiana Avenue
            name: "Fourme d'Ambert",
            cost: 220,
            upgrade: 150,
            position: 23,
            group: "red",
            rent: [
                18, 90, 250, 700, 875, 1050,
            ],
            type: "property",
            url: "images/fromages/fourme.jpg",
            color: "#ff3f3f"
        },
        {
            //Illinois Avenue
            name: "Roquefort",
            cost: 240,
            upgrade: 150,
            position: 24,
            group: "red",
            rent: [
                20, 100, 300, 750, 925, 1100,
            ],
            type: "property",
            url: "images/fromages/roquefort.jpg",
            color: "#ff3f3f"
        },
        {
            //B&0 Railroad
            name: "Abondance",
            cost: 200,
            base_rent: 25,
            position: 25,
            type: "rr",
            url: "images/fromages/abondance.jpg",
            color: "#8B4513",
        },
        {
            //Ventnor Avenue
            name: "Mont d'or",
            cost: 260,
            upgrade: 150,
            position: 27,
            group: "yellow",
            rent: [
                22, 110, 330, 800, 975, 1150,
            ],
            type: "property",
            url: "images/fromages/montdor.jpg",
            color: "#fff852"
        },
        {
            //Marvin Gardens
            name: "Raclette",
            cost: 280,
            upgrade: 150,
            position: 29,
            group: "yellow",
            rent: [
                22, 110, 330, 800, 975, 1150,
            ],
            type: "property",
            url: "images/fromages/raclette.jpg",
            color: "#fff852"
        },
        {
            //Water Works
            name: "Patate",
            cost: 150,
            position: 28,
            group: "utility",
            type: "utility",
            url: "images/fromages/patate.jpg",
            color: "#FBB677"
        },
        {
            //Atlantic Avenue
            name: "Reblochon",
            cost: 260,
            upgrade: 150,
            position: 26,
            group: "yellow",
            rent: [
                24, 120, 360, 850, 1025, 1200,
            ],
            type: "property",
            url: "images/fromages/reblochon.jpg",
            color: "#fff852"
        },
        {
            name: "Tu vas en prison",
            position: 30,
            type: "go-to-jail",
            url: "images/fromages/vache.jpg"
        },
        {
            //Pacific Avenue
            name: "Ossau-iraty",
            cost: 300,
            upgrade: 200,
            position: 31,
            group: "green",
            rent: [
                26, 130, 390, 900, 1100, 1275,
            ],
            type: "property",
            url: "images/fromages/ossau.jpg",
            color: "#008000",
        },
        {
            //North Carolina Avenue
            name: "Tomme",
            cost: 300,
            upgrade: 200,
            position: 32,
            group: "green",
            rent: [
                26, 130, 390, 900, 1100, 1275,
            ],
            type: "property",
            url: "images/fromages/tomme.jpg",
            color: "#008000",
        },
        {
            //Community Chest
            name: "Caisse de Communauté",
            position: 33,
            type: "chest",
            url: "images/fromages/commu.jpg"
        },
        {
            //Pennsylvania Avenue
            name: "Comté",
            cost: 320,
            upgrade: 200,
            position: 34,
            group: "green",
            rent: [
                28, 150, 450, 1000, 1200, 1400,
            ],
            type: "property",
            url: "images/fromages/comte.jpg",
            color: "#008000",
        },
        {
            //Short Line
            name: "Munster",
            cost: 200,
            base_rent: 25,
            position: 35,
            type: "rr",
            url: "images/fromages/munster.jpg",
            color: "#8B4513",
        },
        {
            //Chance
            name: "Chance",
            position: 36,
            type: "chance",
            url: "images/fromages/chance.jpg"
        },
        {
            //Park Place
            name: "Vieux-Lille",
            cost: 350,
            upgrade: 200,
            position: 37,
            group: "dark-blue",
            rent: [
                35, 175, 500, 1100, 1300, 1500,
            ],
            type: "property",
            url: "images/fromages/vieuxlille.jpg",
            color: "#2148ff",
        },
        {
            //Luxury Tax
            name: "Evasion de Taxe",
            position: 38,
            type: "lux-tax",
            url: "https://i.imgur.com/332sOlL.jpg"
        },
        {
            //Boardwalk
            name: "Maroilles",
            cost: 400,
            upgrade: 200,
            position: 39,
            group: "dark-blue",
            rent: [
                50, 200, 600, 1400, 1700, 2000,
            ],
            type: "property",
            url: "images/fromages/maroilles.jpg",
            color: "#2148ff",
        },
    ],
    chance: [
        {
            name: "Va à la case départ (Gagne $200).",
            type: "simple_move",
            position: 0
        },
        {
            name: "Va manger du roquefort",
            type: "simple_move",
            position: 24
        },
        {
            name: "Va mettre de l'emmental sur tes pâtes",
            type: "simple_move",
            position: 11,
            //if you pass Go
        },
        {
            name: "Prend de la charcuterie avec ton fromage",
            type: "nearest_utility",
            extra: "no_go",
            //either tesla or spacex
        },
        {
            name: "Avancez au prochain fromage, si il n'est pas pris, vous pouvez l'acheter !",
            type: "nearest_rr",
        },
        {
            name: "on mange pizza 4 fromages ! + $50.",
            type: "simple_bank_pay",
            amount: 50,
        },
        {
            name: "Reculez de 3 cases.",
            type: "move_amount",
            amount: -3,

        },
        {
            name: "Aller en prison",
            type: "go_to_jail"
        },
        {
            name: "Payez 15$ pour éviter d'être dévoré",
            type: "simple_bank_pay",
            amount: -15,
        },
        {
            name: "Allez manger du beaufort",
            type: "simple_move",
            position: 5
        },
        {
            name: "Va renifler du maroilles",
            type: "simple_move",
            position: 39
        },
        {
            name: "Vous avez fini tout le plateau de fromages, Payez à tous $50.",
            type: "pay_all_players",
            amount: 50,
        },
        {
            name: "C'est raclette ! +$100",
            type: "simple_bank_pay",
            amount: 100,
        },
    ],
    chest: [
        {
            name: "Reviens au départ et gagne $200",
            type: "simple_move",
            position: 0,
        },
        {
            name: "Tu dois payer le plateau de fromages... - $50",
            type: "simple_bank_pay",
            amount: -50,
        },
        {
            name: "Tu as mangé du mauvais fromage, -$50",
            type: "simple_bank_pay",
            amount: -50,
        },
        // {
        //     name: "Get out of Jail Free",
        //     type: "chest"
        // },
        {
            name: "Tu vas en prison ...",
            type: "go_to_jail"
        },
        {
            name: "Apéro, prend un bout de fromage ! Voici $10",
            type: "simple_bank_pay",
            amount: 10,
        },
        {
            name: "Vous gagnez $100",
            type: "simple_bank_pay",
            amount: 100,
        },
    ]

};
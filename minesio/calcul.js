//"data base"
players={"j1":{
        "position":[0,0],
        "size":4,
        "image":"vaxou"},
    "j2":{
        "position":[4,4],
        "size":2,
        "image":"chiarletta"}
}




//example of packet received
packet = ["j1",[1,0]]

//food list
foods = [[2,7],[2,0],[0,5]]

//update position
players[packet[0]]["position"][0] = packet[1][0]
players[packet[0]]["position"][1] = packet[1][1]

//check for food
foods.forEach(e =>{
    if ((Math.sqrt((e[0]-players[packet[0]]["position"][0])**2 + (e[1]-players[packet[0]]["position"][1])**2)) > players[packet[0]]["size"]){
        foods.pop(e)
        players[packet[0]]["size"] += 2
        foods.push([Math.round(Math.random()*10),Math.round(Math.random()*10)])
    }
})

//check for collision
for (player in players){
    if (player != packet[0]){
        if ((Math.sqrt((players[player]["position"][0]-players[packet[0]]["position"][0])**2 + (players[player]["position"][1]-players[packet[0]]["position"][1])**2)) < players[packet[0]]["size"]){
            console.log("collision")
            if (players[packet[0]]["size"] > players[player]["size"]){
                players[packet[0]]["size"] += players[player]["size"]
                players[player]["size"] = 0
            }else{
                players[player]["size"] += players[packet[0]]["size"]
                players[packet[0]]["size"] = 0
            }
        }
    }
}

console.log(foods)


for (player in players){
    console.log(players[player])
}


class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
		fill("black")
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		line(bob1.body.position.x, bob1.body.position.y, this.rope.bodyB.position.x - 80, this.rope.bodyB.position.y)

		line(bob2.body.position.x, bob2.body.position.y, this.rope.bodyB.position.x - 40, this.rope.bodyB.position.y)

		line(bob3.body.position.x, bob3.body.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y)

		line(bob4.body.position.x, bob4.body.position.y, this.rope.bodyB.position.x + 40, this.rope.bodyB.position.y)

		line(bob5.body.position.x, bob5.body.position.y, this.rope.bodyB.position.x + 80, this.rope.bodyB.position.y)


		
	}

}
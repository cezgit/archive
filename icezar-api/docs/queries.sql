db.deal.insertOne({
	_id: "5c292e747c183e425b3dae84",
	title:"",
	content:"Sign up with Safari Books to read more about generics...",
	img:"",
	imgDesc: "",	
	date: 20181230,
	priority: 1
});


db.blog.updateOne(
		{ _id: ObjectId("5bb935a97c183e0c967a3162")},
		{ $push: { dealIds: "5c292e747c183e425b3dae84" } }
)

db.blog.update({}, {$unset: {deals:1}} , {multi: true});
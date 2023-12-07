import React from "react";

function NewSkaterForm({addSkater}) {
  function submit(e){
    e.preventDefault()
    const newSkater = { 
      name : e.target.name.value,
      image : e.target.image.value,
      feed : e.target.feed.value,
      following: e.target.following.value
    }
    addSkater(newSkater)
  }
  return (
    <div className="new-skater-form">
      <h2>New Skater</h2>
      <form key={"newSkater"} onSubmit={(e)=>submit(e)}>
        <input type="text" name="name" placeholder="Skater name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="feed" placeholder="Feed Image Url" />
        <input type="text" name="following" placeholder="Following?" />
        <button type="submit">Add Skater</button>
      </form>
    </div>
  );
}

export default NewSkaterForm;

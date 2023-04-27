import React from 'react'

function LeftSide() {
  return (
    <div>
        <form>
        <div class="input-group-lg" >
  <div class="input-group-prepend">
    <span class="input-group-text">Enter the JSON data</span>
  </div>
  <textarea class="form-control" aria-label="With textarea" row="50" col="50" style={{'color':'white','backgroundColor':'#302c2c'}}></textarea>
</div>
<button type="submit" className="btn btn-primary" >Submit</button>

        </form>
    </div>
  )
}

export default LeftSide
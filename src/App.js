


function App() {
  return (
    <div className="flexcontainer">
      <div className="flexitem">
        <div className="bgsection">
        </div>
        <div className="Formdata">
          <h1>Register to order!</h1>

          <form>
            <input className="Field" type="text" placeholder="Fullname"/><br/>
            <input className="Field" type="text" placeholder="Email"/><br/>
            <input className="Field" type="text" placeholder="Description"/><br/>

            <select className="choose">
              <option value="Nigeria">NIgeria</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Ireland">Ireland</option>
              <option value="Singapore">Singapore</option>
            </select>

            <div className="radio">
              <label htmlFor="Male">Male</label>
              <input name="Male-Female"type="radio"/>

              <label htmlFor ="Female">Female</label>
              <input name ="Male-Female"type ="radio"/>
              
              <label htmlFor ="Others">Others</label>
              <input name ="Male-Female"type ="radio"/>

            </div>

            <div className = "checkbox">
              {/* added label for checkbox */}
            	<label htmlFor = "Agree">Agree:</label> 
            	<input type = "checkbox"/>
          	</div>

            {/* added button class */}
          	<button className = "btn" type = "submit">submit</button>

          </form>
        </div>

      </div>

    </div>
  );
}

export default App;




{/*
function App() {
  return (
    <div className="flexcontainer">
      <div className="flexitem">
        <div className="bgsection">
        </div>
        <div className="Formdata">
          <h1>Register to order!</h1>

          <form>
            <input className="Field" type="text" placeholder="Fullname"/><br/>
            <input className="Field"type="text" placeholder="Email"/><br/>
            <input className="Field"type="description" placeholder="Description"/><br/>

            <select className="choose">
              <option value="Nigeria">NIgeria</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Ireland">Ireland</option>
              <option value="Singapore">Singapore</option>
            </select>
            
            <div className="radio">
              <label>Gender:</label>
              <label for="Male">Male</label>
              <input name="Male-Female"type="radio"/>

              <label for="Female">Female</label>
              <input name="Male-Female"type="radio"/>
              <label for="Others">Others</label>
              <input name="Male-Female"type="radio"/>

            </div>

            <div className="checkbox">
            <label for="Male">Agree:</label>
            <input type="checkbox"/>
            </div>
            
            <button className="btn" type="submit">submit</button>

          </form>
        </div>

      </div>
      
    </div>
  );
}

export default App;
*/}


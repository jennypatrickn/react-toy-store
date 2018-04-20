import React, { Component } from 'react';
 import '../assets/Toies.css';
 function ToyForm(props) {
    
    let form=<div class="toy-form">
        <div class="container-toy-form">
                <div class="toy-form-pic js-tilt">
                    <img src="../../img/toy-logo.ico" alt="IMG"/>
                </div>

                <div class="toy-form-form validate-form">
				<span class="toy-form-form-title">
					Create a new toy
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1" type="text" name="name" placeholder="Name"
					ref={(input) => props.toyModel.name = input}
					 />
					<span class="shadow-input1"></span>
				</div>

				

				<div class="wrap-input1 validate-input" data-validate = "Price is required">
					<input class="input1" type="text" name="subject" placeholder="Price"
					ref={(input) => props.toyModel.price = input}
					/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Price is required">
					<input class="input1" type="text" name="subject" placeholder="Image link"
					ref={(input) => props.toyModel.imageUrl = input}
					/>
					<span class="shadow-input1"></span>
				</div>

				

				<div class="container-toy-form-form-btn">
					<button class="toy-form-form-btn" onClick={() => props.addToy()}>
						<span>
							Add 
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>

			</div>
    </div>
</div>

    return form

   }
 
   export default ToyForm;
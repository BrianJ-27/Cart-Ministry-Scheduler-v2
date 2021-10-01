import React from "react";
import { BsEnvelope, BsShieldLock } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const LoginPage = () => {
  const onSubmit = data => console.log(data);
  return (
	<section className="section__form">
		<div>
			<div className="header__form">
				<h2>Publisher Portal</h2>
				<div className="icon__header--container">
					<FaUsers className="form__icons--header"/>
				</div>
				<p>Welcome to the Congregational Cart Scheduler</p>
				<p>Login here to schedule your cart assignments</p>
			</div>
			<div>
				<form>
					<fieldset>
						<div className="flex__form">
							<div className="form__field">
								<BsEnvelope className="form__icons"/>
								<input className="form__input" id="email" type='email' name="email" autoComplete="off" placeholder=" "/>
								<label htmlFor="email">Email</label>
							</div>
							<div className="form__field">
								<BsShieldLock className="form__icons"/>
								<input className="form__input" id="password" type="password" name="password" placeholder=" "/>
								<label htmlFor="password">Password</label>
							</div>
							<div className="flex__checkbox">
								<div >
									<input type="checkbox" name="checkbox" />
									<span>Remember me</span>
								</div>
								<p><a href="#a">Forgot Password&#63;</a></p>
							</div>
							<button className="btn__overlay--full" type="submit">Login</button>
						</div>	
					</fieldset>
				</form>
			</div>
		</div>
	</section>
  );
}

export default LoginPage;
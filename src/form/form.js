import {
    initLogin
} from "./login";
import {
    initRegistration
} from "./register";
import {
    chipsCreate
} from "./chips";



export const template = `
<div class="page" id="page" name="register">
<div class="container">
		<form name="register" id="registerForm" novalidate>
				<div class="form-title">Регистрация</div>
				<input type="text" name="name" placeholder="Name" id="nameInput">
				<input type="email" name="email" placeholder="Email" id="emailInput">
				<input type="password" name="password" placeholder="password" id="passwordInput">
				<input type="password" name="repeatPassword" placeholder="Repeat password" id="repeatPassword">
				<button id="btn">Submit</button>
		</form>
</div>
</div>

		<form class="box">
				<div class="form-title">Авторизация</div>
				<input type="text" placeholder="login" class="login">
				<input type="password" placeholder="password" class="password">
				<button id="btnLogin" disabled="disabled">Login</button>
		</form>`;

export const initForm = () => {
    const ROOT_NODE = document.getElementById('app');
    ROOT_NODE.innerHTML = template;
    initLogin();
    initRegistration();
};
import { contact } from "./variables.js";

const adressController = () => {
  let address = document.querySelector(".contact-address");

  const addressClass = contact.address.icon.split(" ");

  const addressIcon = document.createElement("i");
  addressIcon.classList.add(addressClass[0]);
  addressIcon.classList.add(addressClass[1]);

  address.appendChild(addressIcon);

  let addressLocation = document.createElement("p");
  addressLocation.innerText = contact.address.location;

  address.appendChild(addressLocation);
};

const phoneController = () => {
  let phone = document.querySelector(".contact-phone");

  const phoneClass = contact.phone.icon.split(" ");

  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add(phoneClass[0]);
  phoneIcon.classList.add(phoneClass[1]);

  phone.appendChild(phoneIcon);

  const phoneNumbersLength = contact.phone.numbers.length;

  contact.phone.numbers.forEach((number, index) => {
    const phoneLink = document.createElement("a");
    phoneLink.setAttribute("href", `tel:${number}`);

    const phoneNumber =
      phoneNumbersLength > 1 && index + 1 !== phoneNumbersLength
        ? `${number}, `
        : number;

    phoneLink.innerText = phoneNumber;

    phone.appendChild(phoneLink);
  });
};

const emailController = () => {
  let email = document.querySelector(".contact-email");

  const emailClass = contact.email.icon.split(" ");

  const emailIcon = document.createElement("i");
  emailIcon.classList.add(emailClass[0]);
  emailIcon.classList.add(emailClass[1]);

  email.appendChild(emailIcon);

  let emailAddress = document.createElement("a");
  emailAddress.setAttribute("href", `mailto:${contact.email.address}`);
  emailAddress.innerText = contact.email.address;

  email.appendChild(emailAddress);
};

const formController = () => {
  const form = document.querySelector("form");
  const successMessage = document.querySelector(".success-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (event.isTrusted) successMessage.classList.add("show");
  });
};

export const contactController = () => {
  adressController();
  phoneController();
  emailController();
  formController();
};

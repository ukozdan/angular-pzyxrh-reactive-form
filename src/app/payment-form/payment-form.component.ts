import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

import { MustMatch } from "../_helpers/must-match.validator";

@Component({
  selector: "app-payment-form",
  templateUrl: "./payment-form.component.html",
  styleUrls: ["./payment-form.component.css"]
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  submitted = false;
  /*arrayInputs = [
    { controlerInputName1: ["", [
      Validators.required, 
      Validators.maxLength(9)
      ]]
    }
  ];

  paymentForm = this.formBuilder.group({
    controllerArray: this.formBuilder.array([])
  });*/

  constructor(private formBuilder: FormBuilder) {}

  /*setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(address => this.formBuilder.group(address));
    const formArray = this.formBuilder.array(arrayFG);
    this.paymentForm.setControl("controllerArray", formArray);
  }*/

  ngOnInit() {
    const nameRegex = /^[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF'\-. ]+$/;
    const emailRegex = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/;
    const centreNumberRegex = /^[a-zA-Z0-9]{5}$/;
    const centreNameRegex = /^[-a-zA-Z0-9 \u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF'\-.:;<>{}()\[\]"+&,|\/\\]+$/;
    const invoiceRegex = /^[0-9]{9,9}$/;
    const telRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const moneyRegex = /^[1-9.][0-9.]*$/;
    this.paymentForm = this.formBuilder.group(
      {
        fullName: ['', {
          validators: [
            Validators.required, 
            Validators.maxLength(60), 
            Validators.pattern(nameRegex)
          ],
          updateOn: 'blur'
        }],
        centreEmailAddress: [
          "", {
          validators: [
            Validators.required, 
            //Validators.email,
            Validators.maxLength(60),
            Validators.pattern(emailRegex),
          ],
          updateOn: 'blur'
        }],
        centreTelephoneNumber: [
          "", {
            validators: [
              Validators.required,
              Validators.maxLength(20),
              Validators.pattern(telRegex),
            ],
            updateOn: 'blur'
        }],
        centreNumber: [
          "", {
            validators: [
              Validators.required,
              Validators.maxLength(60),
            ],
            updateOn: 'blur'
        }],
        centreName: [
          "", {
            validators: [
              Validators.required,
              Validators.maxLength(60),
              Validators.pattern(centreNameRegex),
            ],
            updateOn: 'blur'
        }],
        invoiceReference: [
          "", {
            validators: [
              Validators.required,
              Validators.maxLength(9),
            ],
            updateOn: 'blur'
        }],
        /*invoiceReference: [
          "", {
            validators: [
              Validators.required, 
              Validators.maxLength(9),
              Validators.pattern(/^[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF'\-. ]+$/)
            ]
        }],*/
        currency: [
          "", {
            validators: [
              Validators.required
            ],
            updateOn: 'blur'
        }],
        amount: [
          "", {
            validators: [
              Validators.required,
              Validators.maxLength(50),
              Validators.pattern(moneyRegex),
            ],
            updateOn: 'blur'
        }],
        cardtype: [
          "", {
            validators: [
              Validators.required
            ],
            updateOn: 'blur'
        }],
        comments: [
          "", {
            validators: [
              //Validators.required,
              Validators.maxLength(300),
              Validators.pattern(centreNameRegex),
            ],
            updateOn: 'blur'
        }],
        declaration: [
          false, {
            validators: [
              Validators.requiredTrue
            ],
            updateOn: 'blur'
        }]
      },
      {
        // validator: MustMatch('password', 'confirmPassword')
      },
    );
    //this.setArrayInputs(this.arrayInputs);
  }

  /*addInput() {
    (this.paymentForm.get("controllerArray") as FormArray).push(
      this.formBuilder.group({ controlerInputName1: "" })
    );
  }

  removeInput(index) {
    this.paymentForm.controls.controllerArray["controls"].splice(index, 1);
  }*/

  // convenience getter for easy access to form fields
  get f() {
    return this.paymentForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.paymentForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.paymentForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.paymentForm.reset();
  }
}

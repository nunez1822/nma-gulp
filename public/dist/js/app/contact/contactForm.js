System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ContactForm;
    return {
        setters:[],
        execute: function() {
            ContactForm = (function () {
                function ContactForm(firstName, lastName, email, phoneNumber, comments) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.phoneNumber = phoneNumber;
                    this.comments = comments;
                }
                return ContactForm;
            }());
            exports_1("ContactForm", ContactForm);
        }
    }
});
//# sourceMappingURL=contactForm.js.map
module.exports = {
    'Test suite vente privee': function (browser) {
        browser
            .resizeWindow(1280, 800)
            .url('https://secure.fr.vente-privee.com/authentication/Portal/FR')
            .waitForElementVisible('body', 5000)
            // Open Website Vente privée
            .waitForElementPresent('title')

            // Check block login
            .waitForElementPresent('#txtEmail')
            .waitForElementPresent('#txtPassword')
            .waitForElementPresent('#btSubmit')
            .waitForElementPresent('#signUpLink')


            .moveToElement('#signUpLink', 0, 0)

            // Open registration page
            .click('#signUpLink')
            .waitForElementVisible('body')
            .assert.urlEquals('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
            .waitForElementPresent('title')

            // RadioButton homme must exist
            .waitForElementPresent('#rbtCivility_1')

            // RadioButton femme must exist
            .waitForElementPresent('#rbtCivility_2')

            // Field `Nom` must exist
            .waitForElementPresent('#txtLastName')

            //Field `Prenom` must exist
            .waitForElementPresent('#txtFirstName')

            //Field `Email` must exist
            .waitForElementPresent('#txtMail')

            //Field `Mot de passe` must exist
            .waitForElementPresent('#txtPassword')

            //Checkbox Legal aggrement must exist
            .waitForElementPresent('#ckbInvitMailPartner')

            //Button C'est Parti must exist
            .waitForElementPresent('#registerBt')

            //Registration shouldn't pass
            .moveToElement('#registerBt', 0, 0)
            .click('#registerBt')
            .waitForElementPresent('#CivilityValidate')
            .waitForElementPresent('#txtFirstNameValidate')
            .waitForElementPresent('#txtLastNameValidate')
            .waitForElementPresent('#txtMailValidate')
            .waitForElementPresent('#txtPasswordValidate')

            //Registration should pass
            .click("#rbtCivility_1 ")
            .setValue("#txtFirstName", "Testing")
            .setValue("#txtLastName", "Selenium")
            .setValue("#txtMail", "ronaldo925@hotmail.fr")
            .setValue("#txtPassword", "ronaldo921;")
            .click('#registerBt')
            .waitForElementPresent('a[href="/authentication/logout/"', 15000)
            .assert.urlEquals('https://secure.fr.vente-privee.com/ns/fr-fr/home/default/classic')

            .end();
    }
};
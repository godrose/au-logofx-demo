Feature: Contacts

    Scenario: Load the contacts
        #TODO: Figure out how to set up the Pouch DB
        #Given there are existing contacts
        #| First name | Last name |
        #| Name       | Surname   |
        When I open the app
        Then The contacts should be displayed with the following properties
        | First Name | Last Name |
        | NAme       | Surname   |

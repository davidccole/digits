import React from 'react';
<<<<<<< HEAD
import { Grid, Header, Icon } from 'semantic-ui-react';
=======
import { Header, Grid, Icon } from 'semantic-ui-react';
>>>>>>> 1fd28d57ded44ad87407a4e07eacaa64fb62f36b

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='digits-landing-background'>
<<<<<<< HEAD
          <Grid container stackable centered columns={3}>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='users' inverted> </Icon>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>This address book enables any number of users to log in and save their business
                contacts. You can only see the contacts you have created.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='' inverted> </Icon>
              <Header as='h1' inverted>Contact Details</Header>
              <Header as='h3' inverted>For each contact, you can save their name, address, and phone number.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='' inverted> </Icon>
              <Header as='h1' inverted>Timestamped Notes</Header>
              <Header as='h3' inverted>Each time you make contact with a contact, you can write a note that summarizes
                the conversation. This note is saved along with a timestamp with the contact.</Header>
            </Grid.Column>

=======
          <Grid container centered stackable columns={3}>
            <Grid.Column textAlign='center'>
              <Icon size='huge' name='users' inverted/>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>This address book enables any number of users to register and save
                their business contacts. You can only see the contacts you have created.</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon size='huge' name='file text' inverted/>
              <Header as='h1' inverted>Contact Details</Header>
              <Header as='h3' inverted>For each contact, you can save their name, address, and phone number.</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon size='huge' name='checked calendar' inverted/>
              <Header as='h1' inverted>Timestamped Notes</Header>
              <Header as='h3' inverted>Each time you make contact with a contact, you write a note that
                summarizes the conversation.This note is saved along with a timestamp with the contact.</Header>
            </Grid.Column>

>>>>>>> 1fd28d57ded44ad87407a4e07eacaa64fb62f36b
          </Grid>
        </div>
    );
  }
}

export default Landing;

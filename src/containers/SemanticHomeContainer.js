import React, { Component } from 'react'
import { Grid, Button,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility } from 'semantic-ui-react'



class SemanticHomeContainer extends Component {
   render() {
     return (
       <Segment>
        <Grid
        style={{padding: '100px', height: '100vh'}}
        >
        <Grid.Row textAlign='center' verticalAlign='left' style={{height: '40%', border: '2px red solid', 'background-color': 'red'}}>

          <Grid.Column width={5}>
          SemanticHomeContainer
          </Grid.Column>
          <Grid.Column width={6}>
          SemanticHomeContainer
          </Grid.Column>
          <Grid.Column width={5}>
          SemanticHomeContainer
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center' verticalAlign='middle' style={{height: '30%', border: '2px red solid'}}>
          <Grid.Column width={5}>
          Why
          </Grid.Column>
          <Grid.Column width={5}>
          How
          </Grid.Column>
          <Grid.Column width={5}>
          About
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center' verticalAlign='middle' style={{height: '10%', border: '2px red solid'}}>
          <Grid.Column width={15}>
          Tour
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{height: '10%', border: '2px red solid'}}>
          <Grid.Column width={16}>
          Disclaimer/Information
          </Grid.Column>
        </Grid.Row>

        </Grid>
        </Segment>
     )
   }
 }






 const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Audition'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Find your perfect audition here'

      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>

)



/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}



  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive style={{'padding-top': '50px'}}>
          <Segment
            textAlign='center'
            style={{ minHeight: 600, padding: '1em 0em', 'background-color': '#ffb833' }}
            >
            <HomepageHeading />
          </Segment>
        {children}
      </Responsive>
    )
  }
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container verticalAlign='middle'>
      <Grid.Row textAlign='center'>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            "What a Company"
          </Header>
          <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
        </Grid.Column>
      </Grid.Row>
        <Grid.Row columns='equal'>
          <Grid.Column>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Find, Submit and Book Auditions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Lorem ipsum pueri molesti quique
            </p>
            </Grid.Column>
            <Grid.Column>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column>
          <Header as='h3' style={{ fontSize: '2em' }}>
            We Make Bananas That Can Dance
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
            bioengineered.
          </p>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Learn More/FAQ</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment  vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided  stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header  as='h4' content='More Options' />
              <List link >
                <List.Item as='a'>About</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' >
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout

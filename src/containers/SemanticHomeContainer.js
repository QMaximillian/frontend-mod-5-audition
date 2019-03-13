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
import { Link } from 'react-router-dom'



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
    <Link push to='/about'>
    <Button primary size='huge'>
      Learn More
      <Icon name='right arrow' />
    </Button>
    </Link>
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
            Leave It All On The Stage
          </Header>
          <p style={{ fontSize: '1.33em' }}>Don't worry about anything except for killing your auditions</p>
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
              Track Your Progess
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Audition Journaling to Guide You In the Right Direction
            </p>
          </Grid.Column>
          <Grid.Column>
          <Header as='h3' style={{ fontSize: '2em' }}>
            No More Gatekeeping
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            We give you access to tons of information, to give you the best chance of being cast
          </p>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          <Link push to='#'>
            <Button size='huge'>Learn More/FAQ</Button>
          </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header  as='h4' content='More Options' />
              <List link >
              <Link push to='/about'>
                <List.Item as='a'>About</List.Item>
              </Link>
              <br />
              <Link push to='/contact'>
                <List.Item as='a'>Contact Us</List.Item>
              </Link>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' >
                Footer Header
              </Header>
              <p>
                Questions About This Site?<br />
                Send an email: <a>quinnlashinsky@gmail.com</a>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout

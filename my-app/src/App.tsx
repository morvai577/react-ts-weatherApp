import * as React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import Weather from "./components/Weather";

// API key
const apiKey = "e85029f42c35ff4b712c278310464932";

interface IState {
  description: any;
  error: any;
  humidity: any;
  pressure: any;
  temperature: any;
  visibility: any;
}

export default class App extends React.Component<any, any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      description: "",
      error: "",
      humidity: "",
      pressure: "",
      temperature: "",
      visibility: ""
    };
  }
  public getWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // make an API call
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
    );

    // convert it to json format
    const apiData = await apiCall.json();
    // console.log(apiData);

    if (city && country && apiData.cod !== "404") {
      this.setState({
        description: apiData.weather[0].description,
        error: "",
        humidity: apiData.main.humidity,
        pressure: apiData.main.pressure,
        temperature: apiData.main.temp,
        visibility: apiData.visibility
      });
    } else {
      this.setState({
        description: undefined,
        error: "Please enter a valid location",
        humidity: undefined,
        pressure: undefined,
        temperature: undefined,
        visibility: undefined
      });
    }
  };

  public render() {
    return (
      <div>
        <div>
          <div>
            <br />
            <Container>
              <Row>
                <Col>
                  <Form onSubmit={this.getWeather}>
                    <FormGroup>
                      <Label for="exampleCity">City</Label>
                      <Input
                        type="text"
                        name="city"
                        placeholder="Enter City Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleCountry">Country</Label>
                      <Input
                        type="text"
                        name="country"
                        placeholder="Enter Country Name"
                      />
                    </FormGroup>
                    <Button color="primary">Go</Button>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <br />
                  <Weather
                    description={this.state.description}
                    error={this.state.error}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    temperature={this.state.temperature}
                    visibility={this.state.visibility}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

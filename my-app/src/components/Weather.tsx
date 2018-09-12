import * as React from "react";
import { Container, Jumbotron } from "reactstrap";

export default class Weather extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <div>
          <Jumbotron fluid={true}>
            <Container fluid={true}>
              {this.props.description && (
                <p>
                  {" "}
                  Current Condition: <span>{this.props.description}</span>{" "}
                </p>
              )}
              {this.props.humidity &&
                this.props.pressure && (
                  <p>
                    {" "}
                    Humidity: <span>{this.props.humidity}% </span>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp; Pressure:{" "}
                    <span>{this.props.pressure} hPa</span>{" "}
                  </p>
                )}
              {this.props.temperature &&
                this.props.visibility && (
                  <p>
                    {" "}
                    Temperature:{" "}
                    <span>
                      {this.props.temperature}
                      °C
                    </span>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp; Visibility:{" "}
                    <span>{this.props.visibility} km</span>{" "}
                  </p>
                )}
              {this.props.error && <p> {this.props.error} </p>}
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

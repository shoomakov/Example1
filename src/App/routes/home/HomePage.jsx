import React from 'react';
import importcss from 'importcss';
import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
  CardText,
} from 'reactstrap';
import {
  Grid,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import Component from 'lsk-general/General/Component';
import Slide from 'lsk-general/General/Slide';
import A from 'lsk-general/General/A';

@importcss(require('./HomePage.css'))
export default class HomePage extends Component {
  render() {
    return (
      <Slide
        full
        video="http://skill-branch.ru/video-background.webm"
        overlay
      >
        <Grid>
          <Row>
            <Col md={4} mdOffset={4}>
              <Card>
                <CardBlock>
                  <CardTitle>
                    Example1
                  </CardTitle>
                  Шумаков Сергей Александрович
                </CardBlock>
                <CardFooter className="text-xs-center">
                  <A href="/auth" styleName="Left">
                    Авторизация
                  </A>
                  <A href="/cabinet" styleName="Right">
                    Личный кабинет
                  </A>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Grid>
      </Slide>
    );
  }
}

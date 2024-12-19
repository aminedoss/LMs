import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import CoursesTab from './courstables/CoursesTab'; 
import Table2 from './courstables/tab2'
import Table3 from './courstables/tab3'
import Table4 from './courstables/tab4';


function SkillsTabs() {
  return (
    <Tab.Container defaultActiveKey="first">
      <Nav variant="tabs" className="justify-content-center">
        <Nav.Item>
          <Nav.Link eventKey="first">Science des données</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Certification</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Développement Web</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Analyses et informations économiques</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content className="mt-3">
        <Tab.Pane eventKey="first">
          <CoursesTab /> 
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Table2 />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <Table3 />
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <Table4 />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default SkillsTabs;

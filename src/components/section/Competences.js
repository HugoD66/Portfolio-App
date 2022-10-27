import styled from "styled-components";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CompGeneral from "../UI/CompGeneral";
import CompTechnique from "../UI/CompTechnique";


export default function Competences() {
    return (
        <CompetencesTemplate>
            <Tabs

                   className="mb-3"
                   fill>
                <TabList>
                    <Tab>Général</Tab>
                    <Tab>Technique</Tab>
                </TabList>
                <TabPanel>
                    < CompGeneral />
                </TabPanel>
                <TabPanel>
                    < CompTechnique />
                </TabPanel>
            </Tabs>
        </CompetencesTemplate>
    );


}
const CompetencesTemplate = styled.div`
  width: 100%;
  margin: auto;
  .tabs{
    width: 100%;
  }
`;







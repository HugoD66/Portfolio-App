import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CompGeneral from "../UI/CompGeneral";
import CompTechnique from "../UI/CompTechnique";

export default function Competences() {
    const style = {
        width: "50%",
        height: '47px',
        textAlign: 'center',
        fontSize: '1.5em',
        fontFamily: "Inconsolata",
    }
    return (
        <CompetencesTemplate>
            <Tabs>
                <TabList
                    style={{
                        width: "100%",
                    }}>
                    <Tab style={style}>
                        Général</Tab>
                    <Tab style={style}
                    >
                        Technique</Tab>
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
  @media (min-width: 1500px) {
    width: 84%;
    margin: 4% auto;
  }
`;







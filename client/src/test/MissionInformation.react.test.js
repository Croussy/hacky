import React from "react";
import renderer from "react-test-renderer";
import MissionInformation from "../component/game-controller/MissionInformation";

const missionData = {
    name: "Test1",
    description: "Ceci permet de tester le componentInformation",
    isActive : true,
    isAchieved: false
}

test('MissionInformation component change class when is not disabled', () => {
    missionData.isActive = true
    const component = renderer.create(
        <MissionInformation mission={missionData}/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})

test('MissionInformation component change class when is disabled', () => {
    missionData.isActive = false
    const component = renderer.create(
        <MissionInformation mission={missionData}/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})
test('MissionInformation component change class when is achieved', () => {
    missionData.isActive = true
    missionData.isAchieved = true
    const component = renderer.create(
        <MissionInformation mission={missionData}/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})
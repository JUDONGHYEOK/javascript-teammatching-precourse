import Member from './member.js';
import Team from './team.js';

export default class Model {
  constructor() {
    this.members = [];
    this.teams = [];
    this.init();
  }

  init() {
    const existedMembers = JSON.parse(localStorage.getItem('members'));
    if (existedMembers) {
      existedMembers.forEach((member) => {
        this.members.push(new Member(member.type, member.name));
      });
    }
  }

  addMember(type, name) {
    this.members.push(new Member(type, name));
    localStorage.setItem('members', JSON.stringify(this.members));
  }

  getCrew(type) {
    return this.members
      .filter((member) => member.type === type)
      .map((member) => member.name);
  }

  removeMember(name) {
    this.members = this.members.filter((member) => member.name !== name);
  }

  removeTeams(type, mission) {
    this.teams = this.teams.filter(
      (team) => team.type !== type || team.mission !== mission
    );
  }

  teamMatch(type, mission, number) {
    const crew = this.members
      .filter((member) => member.type === type)
      .map((member) => member.name);
    const num = Number(number);
    const range = [...Array(crew.length)].map((v, i) => i);
    const random = MissionUtils.Random.shuffle(range);
    const randomCrew = random.map((num) => crew[num]);
    let remainder = crew.length % num;
    for (let i = 0; i < crew.length; i += num) {
      const members = randomCrew.slice(i, i + num);
      if (remainder) {
        members.push(crew[random[random.length - remainder]]);
        remainder -= 1;
      }
      this.teams.push(new Team(type, mission, members));
    }
  }

  getTeams(type, mission) {
    const teams = this.teams.filter(
      (team) => team.type === type && team.mission === mission
    );
    const teamNames = [];
    teams.forEach((team) => {
      teamNames.push(team.members);
    });
    return teamNames;
  }

  get names() {
    return this.members.map((member) => member.name);
  }
}

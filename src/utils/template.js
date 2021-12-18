import { CLASS, ID } from '../constants/selector.js';

export function navBar() {
  return `<nav>
    <ul>
      <li>
        <button id = ${ID.TAB_CREW}>크루 관리</button>
      </li>
      <li>
        <button id = ${ID.TAB_TEAM}>팀 매칭 관리</button>
      </li>
    </ul>
  </nav>`;
}

export function choiceCourseRadioBox() {
  return `<h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" name="course" value="frontend" id=${ID.COURSE_CHOICE_FRONT} checked/>
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend" id=${ID.COURSE_CHOCIE_BACK}/>
      <label for="backend">백엔드</label>
    </div>`;
}

export function crewNameForm() {
  return `<form>
        <label>크루 이름</label>
        <input type="text" id=${ID.CREW_NAME_INPUT}/>
        <button>확인</button>
      </form>`;
}

export function crewStatusTable(crews) {
  let table = `<table border="1">
    <thead>
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    </thead>`;
  crews.forEach((crew, idx) => {
    table += `<tr>
      <td>${idx + 1}</td>
      <td>${crew}</td>
      <td>
        <button class = ${CLASS.DELETE_CREW_BUTTON} value=${crew}>삭제</button>
      </td>
    </tr>`;
  });
  table += `</table>`;
  return table;
}

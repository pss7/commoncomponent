import Input from "./components/common/Inpunt";
import CustomSelect from "./components/common/CustomSelect";
import OutlinedButton from "./components/common/OutlinedButton";
import DeleteIconButton from "./components/common/DeleteIconButton";
import addIcon from "./assets/images/add_icon.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ margin: "30px 0" }}>CommonComponent</h1>
        <h2 style={{ margin: "30px 0 15px" }}>Input</h2>
        <Input type="text" placeholder="Placeholder" />
        <h2 style={{ margin: "30px 0 15px" }}>Select</h2>
        <CustomSelect />
        <h2 style={{ margin: "30px 0 15px" }}>OutlinedButton</h2>
        <OutlinedButton height="56px">
          <span>OutlinedButton</span>
        </OutlinedButton>
        <br />
        <OutlinedButton height="56px" disabled>
          <span>Disabled</span>
        </OutlinedButton>
        <br />
        <OutlinedButton height="40px">
          <span>OutlinedButton</span>
        </OutlinedButton>
        <br />
        <OutlinedButton height="36px">
          <span>OutlinedButton</span>
        </OutlinedButton>
        <br />
        <OutlinedButton smallIcon height="28px">
          <span>
            <img src={addIcon} alt="추가 아이콘" />
            OutlinedButton
          </span>
        </OutlinedButton>
        <br />
        <OutlinedButton>
          <span>
            <img src={addIcon} alt="추가 아이콘" />
            OutlinedButton
          </span>
        </OutlinedButton>
        <h2 style={{ margin: "30px 0 15px" }}>DeleteIconButton</h2>
        <DeleteIconButton /> <br />
        <DeleteIconButton disabled />
        <br />
        <br />
        <h1 style={{ margin: "30px 0" }}>Props</h1>
        <h2>01.OutlinedButton</h2>
        <ul className="infoList">
          <li>
            1.height 적용 Props
            <br />
            height="56px" / height="40px" / height="36px" / height="28px"
          </li>
          <li>
            2.disabled 적용 Props <br />
            컴포넌트 disabled 적용
          </li>
        </ul>
        <p className="text">
          *아이콘 적용 시 OutlinedButton span 태그안에 img태그 생성 후 경로에{" "}
          <br />
          addIcon 불러와서 적용 alt="추가 아이콘" 작은 아이콘 적용 시 <br />
          OutlinedButton 컴포넌트에 smallIcon Props 적용
        </p>
        <h2 style={{ margin: "60px 0 0" }}>02.DeleteIconButton</h2>
        <ul className="infoList">
          <li>
            disabled 적용 Props <br />
            컴포넌트 disabled 적용
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

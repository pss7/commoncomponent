import Input from "./components/common/Inpunt";
import CustomSelect from "./components/common/CustomSelect";
import OutlinedButton from "./components/common/OutlinedButton";
import DeleteIconButton from "./components/common/DeleteIconButton";

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
        </OutlinedButton>{" "}
        <br />
        <OutlinedButton height="56px" disabled>
          <span>Disabled</span>
        </OutlinedButton>
        <br />
        <OutlinedButton height="40px">
          <span>OutlinedButton</span>
        </OutlinedButton>{" "}
        <br />
        <OutlinedButton height="36px">
          <span>OutlinedButton</span>
        </OutlinedButton>{" "}
        <br />
        <OutlinedButton
          iconUrl="/images/add_icon.png"
          iconWidth="18px"
          iconHeight="17px"
          height="28px"
        >
          <span>OutlinedButton</span>
        </OutlinedButton>{" "}
        <br />
        <OutlinedButton iconUrl="/images/add_icon.png">
          <span>OutlinedButton</span>
        </OutlinedButton>
        <h2 style={{ margin: "30px 0 15px" }}>DeleteIconButton</h2>
        <DeleteIconButton /> <br />
        <DeleteIconButton disabled />
        <br />
        <br />
        <h1 style={{ margin: "30px 0" }}>Props</h1>
        <h2>01.OutlinedButton</h2>
        <ul>
          <li>
            1.height 적용 Props
            <br />= height="56px" / height="40px" / height="36px" /
            height="28px"
          </li>
          <li>
            2.disabled 적용 Props <br />
            컴포넌트 disabled 적용
          </li>
          <li>
            3.큰 아이콘 적용 Props <br />
            iconUrl="경로"
          </li>
          <li>
            4.작은 아이콘 적용 Props (height가 28px인 OutlinedButton에 적용됨)
            <br />
            iconWidth="18px" <br />
            iconHeight="17px"
          </li>
        </ul>
        <h2 style={{ margin: "60px 0 0" }}>02.DeleteIconButton</h2>
        <ul>
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

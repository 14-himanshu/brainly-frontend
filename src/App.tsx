
import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon />}
        size="lg"
        variant={"primary"}
        text="Share"
        onClick={() => {}}
        endIcon={<ShareIcon />}
      />
      <Button
        startIcon={<PlusIcon/>}
        size="lg"
        variant={"secondary"}
        text="Share"
        onClick={() => {}}
        endIcon={<ShareIcon />}
      />


      <Button
        startIcon={<PlusIcon />}
        size="md"
        variant={"primary"}
        text="Share"
        onClick={() => {}}
        endIcon={<ShareIcon/>}
      />
      <Button
        startIcon={<PlusIcon/>}
        size="md"
        variant={"secondary"}
        text="Share"
        onClick={() => {}}
        endIcon={<ShareIcon/>}
      />
      <Button
        startIcon={<PlusIcon />}
        size="sm"
        variant={"primary"}
        text="Share"
        onClick={() => {}}
        endIcon={<ShareIcon/>}
      />
      <Button
        startIcon={<PlusIcon />}
        size="sm"
        variant={"secondary"}
        text="Share"
        onClick={() => {}}
        endIcon={<ShareIcon/>}
      />
    </>
  );
}

export default App;

import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { Shareicon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon/>}/>
      <Button variant="secondary" text="Share brain" startIcon={<Shareicon/>}/>

      <Card/>
    </div>
  );
}

export default App;

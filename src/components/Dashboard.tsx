import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"


export default function Dashboard() {
  return (
    <Card className="max-w-[300px] bg-red-200">
        
      <CardHeader>
        <CardTitle className="text-lg">Learn Next JS</CardTitle>
        <CardDescription>Read docs and make projects</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="p-2 border-[1px] border-solid border-muted-foreground space-x-2 flex items-start rounded-md">
        <Checkbox/>
        <Label>Lorem ipsum dolor</Label>
        </div>
        <div className="p-2 border-[1px] border-solid border-muted-foreground space-x-2 flex items-start rounded-md">
        <Checkbox/>
        <Label>Install Next JS using npm</Label>
        </div>
        <div className="p-2 border-[1px] border-solid border-muted-foreground space-x-2 flex items-start rounded-md">
        <Checkbox/>
        <Label>Setup tailwind</Label>
        </div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

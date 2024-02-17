// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="bg-white">
      <nav className="bg-[#F2F6FF] px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <GlobeIcon className="text-[#22C55E]" />
            {/* <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="UPSC CSE - GS" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="upsc">UPSC CSE - GS</SelectItem>
                <SelectItem value="ssc">SSC Exams</SelectItem>
              </SelectContent>
            </Select> */}
            <Input
              className="w-[300px]"
              placeholder="Search courses, test series and educators"
              type="search"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link className="text-blue-600" href="#">
              Talk to our experts
            </Link>
            <span className="text-[#FFA500]">+91-8585858585</span>
            <Avatar>
              <AvatarImage
                alt="User"
                src="/placeholder.svg?height=32&width=32"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex space-x-4">
            <Link className="block text-sm font-medium text-gray-700" href="#">
              Get started
            </Link>
            <Link className="block text-sm font-medium text-gray-700" href="#">
              Educators
            </Link>
            <Link className="block text-sm font-medium text-gray-700" href="#">
              Batch
            </Link>
            <Link className="block text-sm font-medium text-gray-700" href="#">
              Store
            </Link>
            <Badge variant="secondary">NEW</Badge>
          </div>
          <div className="flex space-x-4">
            <Link className="block text-sm font-medium text-gray-700" href="#">
              Subscription plan
            </Link>
            <Link className="block text-sm font-medium text-gray-700" href="#">
              Success stories
            </Link>
            <Link className="block text-sm font-medium text-gray-700" href="#">
              About exam
            </Link>
          </div>
        </div>
      </nav>
      <section className="px-4 py-8">
        <div className="grid grid-cols-3 gap-4">
          <Card className="col-span-2">
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-red-600">
                    FREE Extension of up to 12 Months on UPSC IAS / IPS
                    Subscriptions
                  </h2>
                  <Button variant="default">Enroll Now</Button>
                  <p className="text-sm text-gray-500">
                    *T&C apply, as available on the platform
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    alt="Student studying"
                    className="h-[200px] w-[200px]"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">Try learning for free</Button>
              <Button variant="secondary">View subscription plans</Button>
            </CardFooter>
          </Card>
          <div>
            <Button className="mb-4" variant="outline">
              View subscription offers
            </Button>
            <img
              alt="Offer banner"
              className="h-[300px] w-[350px]"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/300",
                objectFit: "cover",
              }}
              width="350"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

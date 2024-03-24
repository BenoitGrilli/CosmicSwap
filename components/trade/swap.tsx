import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { InputAmount } from "./inputAmout"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SwapForm() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Exchange</CardTitle>
                <CardDescription>Trade tokens in an instant</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="bg-gray-200 shadow-md rounded-lg">
                            <div className="p-6 flex flex-row ">
                                <div className="justify-self-start">
                                    <InputAmount id="name" placeholder="Name of your project" />
                                </div>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">BNB</SelectItem>
                                        <SelectItem value="sveltekit">Ether</SelectItem>
                                        <SelectItem value="astro">BTC</SelectItem>

                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex flex-row bg-red-500 justify-between">
                        <div className="justify-self-start w-auto">

                        <InputAmount id="name" placeholder="Name of your project" />
                        </div>
                  
                        <div className="justify-self-end ">

                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">BNB</SelectItem>
                                    <SelectItem value="sveltekit">Ether</SelectItem>
                                    <SelectItem value="astro">BTC</SelectItem>s
                                </SelectContent>
                            </Select>
                        </div>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button className="mt-5 w-full">Connect Wallet</Button>
            </CardFooter>
        </Card>
    )
}

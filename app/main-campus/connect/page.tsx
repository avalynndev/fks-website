"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import FadeImage from "@/components/ui/fade-image";

export default function AdmissionsForm() {
  return (
    <div className="py-10">
      <div className="relative mx-auto max-w-7xl h-[500px] rounded-3xl overflow-hidden">
        <FadeImage
          src="/Contact-us-Cover.jpeg"
          alt="Connect"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-10">
          {/* Contact Info */}
          <div className="p-6 shadow-md rounded-2xl space-y-4 border">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">CONTACT US</h2>
              <p>
                <strong>The Future Kid’s School</strong>
                <br />
                Puppal Guda, Rajendranagar Mandal, RR Dist.
                <br />
                Hyderabad, Telangana 500075
              </p>
            </div>
            <div className="space-y-1">
              <p>📞 +91 9959 319 742</p>
              <p>📞 +91 9154 219 742</p>
              <p>✉️ connect@tfks.in</p>
              <p>✉️ admissions@tfks.in</p>
            </div>
          </div>

          {/* Admission Age Criteria */}
          <div className="p-6 shadow-md rounded-2xl border space-y-4">
            <h2 className="text-2xl font-bold">
              Admission Age Criteria (2025–26)
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Grade</TableHead>
                  <TableHead>Year of Birth</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Grade 1", "2019"],
                  ["Grade 2", "2018"],
                  ["Grade 3", "2017"],
                  ["Grade 4", "2016"],
                  ["Grade 5", "2015"],
                  ["Grade 6", "2014"],
                  ["Grade 7", "2013"],
                  ["Grade 8", "2012"],
                  ["Grade 9", "2011"],
                  ["Grade 11", "2010"],
                ].map(([grade, year]) => (
                  <TableRow key={grade}>
                    <TableCell>{grade}</TableCell>
                    <TableCell>{year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="border border-muted p-8 shadow-md rounded-2xl space-y-6">
          <h2 className="text-2xl font-bold text-primary">ADMISSIONS FORM</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="childName">Child&apos;s Name*</Label>
                <Input
                  id="childName"
                  required
                  placeholder="As per official ID"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender*</Label>
                <Select required>
                  <SelectTrigger className="w-full" id="gender">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth*</Label>
                <Input id="dob" required placeholder="dd/mm/yyyy" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <Input id="grade" value="Not Qualified" disabled />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fatherName">Father&apos;s Name*</Label>
              <Input
                id="fatherName"
                required
                placeholder="As per official ID"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fatherEmail">Father&apos;s Email*</Label>
                <Input id="fatherEmail" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherPhone">Father&apos;s Mobile No.*</Label>
                <Input id="fatherPhone" type="tel" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fatherOccupation">
                  Father&apos;s Occupation*
                </Label>
                <Input id="fatherOccupation" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherQualification">
                  Father&apos;s Qualification*
                </Label>
                <Input id="fatherQualification" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="motherName">Mother&apos;s Name*</Label>
              <Input
                id="motherName"
                required
                placeholder="As per official ID"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="motherEmail">Mother&apos;s Email*</Label>
                <Input id="motherEmail" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="motherPhone">Mother&apos;s Mobile No.*</Label>
                <Input id="motherPhone" type="tel" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="motherOccupation">
                  Mother&apos;s Occupation*
                </Label>
                <Input id="motherOccupation" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="motherQualification">
                  Mother&apos;s Qualification*
                </Label>
                <Input id="motherQualification" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Residential Address*</Label>
              <Textarea
                id="address"
                required
                placeholder="Complete postal address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="referral">How did you hear about us?*</Label>
              <Select required>
                <SelectTrigger className="w-full" id="referral">
                  <SelectValue placeholder="Select Choice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Google">Google</SelectItem>
                  <SelectItem value="Friend">Friend</SelectItem>
                  <SelectItem value="Social Media">Social Media</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments">Comments*</Label>
              <Textarea id="comments" required />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <section className="container max-w-container relative md:py-10 mx-auto rounded-3xl overflow-hidden">
        <GoogleMapsEmbed
          apiKey="AIzaSyCfMS7tLTo3CJUo96zYYRSo6HUiAWZbT7Q"
          height={400}
          width="100%"
          mode="place"
          q="The+Future+Kid's+School,"
        />
      </section>
    </div>
  );
}

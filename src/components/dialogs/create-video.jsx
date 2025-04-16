import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import { $api, categoryArr } from "../../utils";

export function CreateVideo() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);


  const handleCreateVideo = async () => {
    setLoading(true);
    try {
      const response = await $api.post("/videos/create", {
        title,
        description,
        url,
        category,
      });

      if (response.status === 201) {
        alert("Video muvaffaqiyatli yaratildi!");
        setTitle("");
        setDescription("");
        setUrl("");
        setCategory("");
        handleOpen();
        window.location.reload();
        setOpen(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <duv className="flex mx-3 items-center gap-2" onClick={handleOpen}>
        <CodeBracketSquareIcon className="h-5 w-5" />
        <span className="text-gray-900">Create Video</span>
      </duv>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Create Video</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input
              size="lg"
              label="Title"
              onChange={(e) => setTitle(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />

            <Input
              size="lg"
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            <Input
              size="lg"
              label="Url"
              onChange={(e) => setUrl(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            <Select
              label="Category"
              value={category}
              onChange={(val) => setCategory(val)}
            >
              {categoryArr.map((item) => (
                <Option className=" capitalize" key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            disabled={loading}
            color="green"
            onClick={handleCreateVideo}
          >
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

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

export function UpdateVideo({ data }) {
  const [title, setTitle] = React.useState( data.title || "");
  const [description, setDescription] = React.useState(data.description || "");
  const [url, setUrl] = React.useState(data.url || "");
  const [category, setCategory] = React.useState(data.category || "");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleUpdateVideo = async () => {
    setLoading(true);
    try {
      const response = await $api.put(
        "/videos/update/" + data._id,
        {
          title,
          description,
          url,
          category,
        }
      );

      if ( 200 < response.status < 400) {
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
    <Button onClick={handleOpen} color="blue">Update</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Create Video</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input
              size="lg"
              value={title}
              label="Title"
              onChange={(e) => setTitle(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            <Input
              size="lg"
              value={description}
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            <Input
              size="lg"
              label="Url"
              value={url}
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
            color="blue"
            onClick={handleUpdateVideo}
          >
            <span>Update</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
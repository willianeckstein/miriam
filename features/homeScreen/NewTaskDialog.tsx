import { Plus } from "~/lib/icons/Plus";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function NewTaskDialog() {
  return (
    <Dialog className="absolute right-10 bottom-10">
      <DialogTrigger asChild>
        <Button className="rounded-full size-16" size="icon">
          <Plus className="text-black" size={30} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Tarefa</DialogTitle>
          <DialogDescription>
            Adicione uma nova tarefa à sua lista.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>
              <Text>Cancelar</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

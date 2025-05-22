import { useRef, useState } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash, Download, Play, Pause, Calendar } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type CallLog = {
  id: string;
  fileUrl: string;
  member: string;
  duration: string;
  status: "Missed" | "Connected";
  date: string;
  type: "Call" | "Voice Chat";
};

const dummyData: CallLog[] = [
  {
    id: "1",
    fileUrl: "/audio/sample1.mp3",
    member: "Richel",
    duration: "3:45",
    status: "Connected",
    date: "2025-05-20",
    type: "Call",
  },
  {
    id: "2",
    fileUrl: "/audio/sample2.mp3",
    member: "Alex",
    duration: "1:20",
    status: "Missed",
    date: "2025-05-18",
    type: "Voice Chat",
  },
];

const fetchCallLogs = async (): Promise<CallLog[]> => {
  return dummyData;
};

const queryClient = new QueryClient();

function CallLogsComponent() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<CallLog[]>({
    queryKey: ["callLogs"],
    queryFn: fetchCallLogs,
  });

  const [filters, setFilters] = useState({
    member: "",
    status: "",
    date: "",
    type: "",
  });

  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const handlePlay = (id: string) => {
    const currentAudio = audioRefs.current[id];
    if (!currentAudio) return;

    if (playingId && playingId !== id) {
      const prevAudio = audioRefs.current[playingId];
      prevAudio?.pause();
    }

    if (currentAudio.paused) {
      currentAudio.play();
      setPlayingId(id);
    } else {
      currentAudio.pause();
      setPlayingId(null);
    }
  };

  const filteredLogs = data.filter((log) => {
    return (
      (!filters.member ||
        log.member.toLowerCase().includes(filters.member.toLowerCase())) &&
      (!filters.status || log.status === filters.status) &&
      (!filters.date || log.date === filters.date) &&
      (!filters.type || log.type === filters.type)
    );
  });

  if (isLoading)
    return <div className="text-white p-4">Loading call logs...</div>;
  if (isError)
    return <div className="text-red-500 p-4">Error loading call logs.</div>;
  if (filteredLogs.length === 0)
    return <div className="text-white p-4">No call logs found.</div>;

  return (
    <Card className="bg-[#0B0D11] border border-gray-700 text-white p-4">
      <CardContent>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Call Logs</h2>
          <p className="text-sm text-gray-400">
            Call logs are retained for 30 days and automatically deleted
            afterward.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant={filters.type === "Call" ? "default" : "outline"}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                type: prev.type === "Call" ? "" : "Call",
              }))
            }
            className="text-white bg-[#0B0D11] border border-gray-700"
          >
            Call
          </Button>
          <Button
            variant={filters.type === "Voice Chat" ? "default" : "outline"}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                type: prev.type === "Voice Chat" ? "" : "Voice Chat",
              }))
            }
            className="text-white bg-[#0B0D11] border border-gray-700"
          >
            Voice Chat
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              setFilters({ member: "", status: "", date: "", type: "" })
            }
            className="text-white border border-gray-700"
          >
            Reset Filters
          </Button>
        </div>

        <div className="mb-4 flex flex-col md:flex-row justify-between gap-4">
          <Input
            placeholder="Filter by member"
            value={filters.member}
            onChange={(e) => setFilters({ ...filters, member: e.target.value })}
            className="bg-[#0B0D11] border-gray-700 text-white placeholder:text-white"
          />
          <Select
            onValueChange={(value) => setFilters({ ...filters, status: value })}
          >
            <SelectTrigger className="bg-[#0B0D11] border-gray-700 text-white placeholder:text-white">
              <SelectValue placeholder="Status" className="text-white" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Connected">Connected</SelectItem>
              <SelectItem value="Missed">Missed</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative w-full">
            <Input
              type="date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              className="bg-[#0B0D11] border-gray-700 text-white placeholder:text-white pr-10"
            />
            <Calendar
              size={16}
              color="white"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-white">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="p-2">File</th>
                <th className="p-2">Member</th>
                <th className="p-2">Duration</th>
                <th className="p-2">Status</th>
                <th className="p-2">Date</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr
                  key={log.id}
                  className="border-b border-gray-700 hover:bg-gray-800"
                >
                  <td className="p-2 flex items-center gap-2">
                    <button onClick={() => handlePlay(log.id)}>
                      {playingId === log.id ? (
                        <Pause size={18} color="white" />
                      ) : (
                        <Play size={18} color="white" />
                      )}
                    </button>
                    <audio
                      // ref={(el) => (audioRefs.current[log.id] = el)}
                      src={log.fileUrl}
                      onEnded={() => setPlayingId(null)}
                    />
                  </td>
                  <td className="p-2">{log.member}</td>
                  <td className="p-2">{log.duration}</td>
                  <td
                    className={cn(
                      "p-2",
                      log.status === "Missed"
                        ? "text-red-400"
                        : "text-green-400"
                    )}
                  >
                    {log.status}
                  </td>
                  <td className="p-2">{log.date}</td>
                  <td className="p-2 flex gap-2">
                    <Dialog>
                      <DialogTrigger>
                        <Button variant="destructive" size="sm">
                          <Trash size={14} color="white" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#0B0D11] text-white border-gray-700">
                        <p>Are you sure you want to delete this log?</p>
                      </DialogContent>
                    </Dialog>
                    <a href={log.fileUrl} download>
                      <Button size="sm">
                        <Download size={14} color="white" />
                      </Button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-xs text-gray-400 mt-4">
          Call logs are retained for 30 days and automatically deleted
          afterward.
        </div>
      </CardContent>
    </Card>
  );
}

export default function CallLogs() {
  return (
    <QueryClientProvider client={queryClient}>
      <CallLogsComponent />
    </QueryClientProvider>
  );
}

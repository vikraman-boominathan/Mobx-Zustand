import { makeAutoObservable, runInAction } from "mobx";
import { getList } from "@/api/list";
import { ProjectList } from "@/types/list";

class ProjectStore {
  projects: ProjectList = { projects: [] };
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProjects() {
    this.loading = true;
    this.error = null;

    try {
      const response = await getList();
      runInAction(() => {
        this.projects = response.data;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error =
          error instanceof Error ? error.message : "Failed to fetch projects";
        this.loading = false;
      });
    }
  }
}

export const projectStore = new ProjectStore();

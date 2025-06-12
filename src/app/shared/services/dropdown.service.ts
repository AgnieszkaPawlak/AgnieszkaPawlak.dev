import {Injectable, signal, WritableSignal} from '@angular/core';

Injectable({
  providedIn: 'root'
})
export class DropdownService {
  private activeDropdown: WritableSignal<string | null> = signal(null);

  openDropdown(id: string): void {
    this.activeDropdown.set(id);
  }

  closeDropdown(): void {
    this.activeDropdown.set(null);
  }

  isDropdownOpen(id: string): boolean {
    return this.activeDropdown() === id;
  }
}

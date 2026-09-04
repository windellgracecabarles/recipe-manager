const FILTERS = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

export default function CategoryFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* TODO: render one button per FILTERS entry.
          - Each button calls onFilterChange(f) on click.
          - The active button should look different from the others
            (e.g., "btn-primary" for active, "btn-outline" otherwise).
          - Don't forget the `key` prop! */}
          <button
          className={
            currentFilter === "all"
            ? "btn btn-primary"
            : "btn btn-ghost"
          }
          onClick={() => onChangeFilter("all")}
          >
            All
          </button>

          <button
        className={
          currentFilter === "Breakfast"
            ? "btn btn-primary"
            : "btn btn-ghost"
        }
        onClick={() => onChangeFilter("Breakfast")}
      >
        Breakfast
      </button>

      <button
        className={
          currentFilter === "Lunch"
            ? "btn btn-primary"
            : "btn btn-ghost"
        }
        onClick={() => onChangeFilter("Lunch")}
      >
        Lunch
      </button>

      <button
        className={
          currentFilter === "Dinner"
            ? "btn btn-primary"
            : "btn btn-ghost"
        }
        onClick={() => onChangeFilter("Dinner")}
      >
        Dinner
      </button>

      <button
        className={
          currentFilter === "Dessert"
            ? "btn btn-primary"
            : "btn btn-ghost"
        }
        onClick={() => onChangeFilter("Dessert")}
      >
        Dessert
      </button>
    </div>
  );
};

export default CategoryFilter;

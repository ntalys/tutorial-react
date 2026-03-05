import type { BodyType } from "@/@types/users";
import { BaseContainer } from "@/components/containers/dashboard/base-container";
import UsersTable from "@/components/table/users/users-table";
import { useOutletContext } from "react-router-dom";

export function Users() {
  const usersContext: BodyType = useOutletContext();

  const users = usersContext.users;

  return (
    <BaseContainer>
      <UsersTable users={users} />
    </BaseContainer>
  );
}
